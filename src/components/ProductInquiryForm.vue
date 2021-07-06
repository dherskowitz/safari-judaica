<template>
    <div
        v-if="showForm"
        id="inquiry-form"
        @click="hideForm"
        class="bg-gray-600 bg-opacity-75 fixed w-full h-full top-0 left-0 md:flex md:items-center md:justify-center z-30 overflow-y-scroll"
    >
        <div class="absolute top-0 right-0 pt-8 md:pt-10 pr-5 md:pr-10 z-40 cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 md:w-20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
        </div>
        <div
            v-if="messageSent"
            class="bg-white md:max-w-lg rounded-md shadow-lg p-5 md:p-10 m-4 text-xl text-center leading-loose"
            @click.stop
        >
            <p>Your inquiry has been successfully sent.</p>
            <p>Someone will contact you as soon as possible.</p>
            <p>Thank you.</p>
            <button
                @click="hideForm"
                class="bg-outerSpace-default px-8 py-2 mt-8 text-white rounded-lg shadow-lg"
            >Close</button>
        </div>
        <div v-else class="bg-white md:max-w-lg rounded-md shadow-lg p-5 md:p-10 m-4" @click.stop>
            <div>
                <p class="text-xl text-center">
                    Call
                    <span class="hidden md:inline-block">+1 947-886-0157</span>
                    <span class="md:hidden">
                        <a href="tel:+19478860157">+1 947-886-0157</a>
                    </span>
                </p>
            </div>
            <div class="my-6">
                <hr class="border-b-2 border-gray-300 my-3" />
                <p class="-mt-8 text-xl text-center bg-white w-8 mx-auto">or</p>
            </div>
            <div>
                <h1 class="text-2xl text-center border-b-4 border-outerSpace mb-8">Send Inquiry</h1>
                <p
                    class="text-lg mb-8 max-w-md mx-auto"
                >{{ productName }} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, voluptatibus!</p>
                <form
                    action
                    class="w-full max-w-md mx-auto"
                    :class="{ 'pointer-events-none': sending }"
                >
                    <div class="w-full mt-8" :class="{ 'border-red-400': $v.formData.name.$error }">
                        <div class="flex flex-row justify-between">
                            <label for="name" class>Name</label>
                            <span
                                class="text-red-500 font-semibold ml-6 text-sm text-right"
                                v-if="!$v.formData.name.required"
                            >Field is required</span>
                        </div>
                        <input
                            class="border-gray-500 border-2 w-full h-10 pl-2"
                            type="text"
                            name="name"
                            placeholder="full name"
                            v-model="formData.name"
                        />
                    </div>
                    <div class="w-full mt-8">
                        <div class="flex flex-row justify-between">
                            <label for="email" class="block">Email</label>
                            <div
                                class="text-red-500 text-sm font-semibold"
                                v-if="!$v.formData.email.required"
                            >Field is required</div>
                        </div>
                        <input
                            class="border-gray-500 border-2 w-full h-10 pl-2"
                            type="text"
                            name="email"
                            placeholder="test@example.com"
                            v-model="formData.email"
                        />
                        <div
                            class="text-red-500"
                            v-if="!$v.formData.email.email"
                        >Please enter a valid email address.</div>
                    </div>
                    <div class="flex">
                        <div class="mt-8 w-1/2">
                            <label for="country" class="block">Country</label>
                            <select
                                name="country"
                                v-model="formData.country"
                                class="border-gray-500 border-2 w-full h-10 pl-2"
                            >
                                <option
                                    v-for="c in countries"
                                    :key="c.code"
                                    :value="c.code"
                                >{{ c.name }} - {{ c.dial_code }}</option>
                            </select>
                            <div
                                class="text-red-500 font-semibold text-sm"
                                v-if="!$v.formData.country.required"
                            >Field is required</div>
                        </div>
                        <div class="w-1/2 mt-8">
                            <label for="phone" class="block">Phone</label>
                            <input
                                class="border-gray-500 border-2 w-full h-10 pl-2"
                                type="text"
                                name="phone"
                                placeholder="123-456-7890"
                                v-model="formData.phone"
                                @input="formatPhone"
                            />
                            <div
                                class="text-red-500 font-semibold text-sm"
                                v-if="!$v.formData.phone.required"
                            >Field is required</div>
                            <div
                                class="text-red-500"
                                v-if="showErrors && !$v.formData.phone.mustBePhone"
                            >Please enter a valid phone number.</div>
                        </div>
                    </div>
                    <div class="w-full mt-8">
                        <label for="message">Message</label>
                        <textarea
                            rows="5"
                            class="border-gray-500 border-2 w-full pl-2"
                            type="text"
                            name="message"
                            v-model="formData.message"
                        ></textarea>
                    </div>
                    <div
                        v-if="messageError"
                        class="text-xl text-center text-red-600 font-bold mt-4"
                    >
                        <p>There was a problem sending this inquiry. Please try again later.</p>
                    </div>
                    <button
                        class="bg-outerSpace-default text-white text-lg mt-8 h-16 rounded-lg shadow-lg w-full"
                        @click.prevent="sendInquiry"
                    >
                        <span v-if="!sending">Submit</span>
                        <g-image
                            v-else
                            src="~/assets/loader.svg"
                            class="w-10 text-center mx-auto"
                        >sending</g-image>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import countries from "~/assets/countryCodes.json";
import { validationMixin } from "vuelidate";
import {
    required,
    minLength,
    email,
    integer,
    helpers,
} from "vuelidate/lib/validators";
const mustBePhone = (value) =>
    !helpers.req(value) || /^[0-9]+(-[0-9]+)+$/.test(value);

export default {
    name: "InquiryForm",
    props: ["showForm", "productName"],
    mixins: [validationMixin],
    data() {
        return {
            sending: false,
            messageSent: false,
            messageError: false,
            showErrors: false,
            countries: countries,
            formData: {
                name: "",
                email: "",
                phone: "",
                country: "",
                countryCode: "",
                message: `Hi! I am interested in purchasing ${this.productName}`,
            },
        };
    },
    validations: {
        formData: {
            name: {
                required,
            },
            email: {
                required,
                email,
            },
            phone: {
                required,
                mustBePhone,
            },
            country: {
                required,
            },
        },
    },
    methods: {
        formatPhone() {
            let x = this.formData.phone
                .replace(/\D/g, "")
                .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.formData.phone = !x[2]
                ? x[1]
                : "" + x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
        },
        hideForm() {
            if (this.messageSent) this.messageSent = false;
            if (this.messageError) this.messageError = false;
            this.$emit("hideForm", true);
            document
                .querySelector("body")
                .classList.remove(
                    "flex",
                    "items-center",
                    "justify-center",
                    "h-screen",
                    "overflow-y-hidden"
                );
            this.formData.name = "";
            this.formData.email = "";
            this.formData.phone = "";
            this.formData.country = "";
            this.formData.countryCode = "";
            this.formData.message = `Hi! I am interested in purchasing ${this.productName}`;
        },
        async sendInquiry() {
            let formData = {
                productData: this.$page.product,
                formData: this.formData,
            };
            formData.formData.countryCode = this.countries.find(
                (c) => c.code == this.formData.country
            ).dial_code;
            let options = {
                method: "post",
                body: JSON.stringify(formData),
            };
            if (this.$v.$invalid) {
                this.showErrors = true;
            } else {
                this.sending = !this.sending;
                try {
                    let response = await fetch("/api/product_inquiry", options);
                    let data = await response.json();
                    if (data.body.error || data.body.errno) {
                        this.messageError = true;
                    } else {
                        this.messageSent = true;
                    }
                    this.sending = !this.sending;
                    return data;
                } catch (error) {
                    console.error(error);
                }
            }
        },
    },
};
</script>

<style>
</style>

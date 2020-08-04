<template>
    <Layout>
        <div
            class="text-center bg-white rounded-lg shadow-lg mt-10 md:mt-20 p-10"
            :class="{ 'block': messageSent, 'hidden': !messageSent }"
        >
            <p class="text-2xl mb-6">Thank you for your inquiry.</p>
            <p class="text-xl mb-4">Someone will respond to your inquiry as soon as possible.</p>
            <p class="text-xl">In the meantime why not take a look at one of our popular products</p>
        </div>
        <section v-if="!messageSent" class="bg-white rounded-lg shadow-lg mt-10 md:mt-20 p-10">
            <div class="max-w-xl mx-auto">
                <p class="text-2xl text-center">
                    Call
                    <span class="hidden md:inline-block">+1 947-886-0157</span>
                    <span class="md:hidden">
                        <a href="tel:+19478860157">+1 947-886-0157</a>
                    </span>
                </p>
            </div>
            <div class="my-6 max-w-xl mx-auto">
                <hr class="border-b-2 border-gray-300 my-3" />
                <p class="-mt-8 text-xl text-center bg-white w-8 mx-auto">or</p>
            </div>
            <div class="max-w-xl mx-auto">
                <form :class="{ 'pointer-events-none': sending, 'hidden': messageSent }">
                    <h2 class="text-2xl text-center mb-8">Send Inquiry</h2>
                    <div class="w-full mt-8" :class="{ 'border-red-400': $v.formData.name.$error }">
                        <div class="flex flex-row justify-between">
                            <label for="name" class>Name</label>
                            <span
                                class="text-red-500 font-semibold ml-6 text-sm text-right"
                            >Field is required</span>
                        </div>
                        <input
                            class="border-gray-500 border-2 w-full h-10 pl-2"
                            type="text"
                            name="name"
                            placeholder="full name"
                            v-model="formData.name"
                        />
                        <div
                            class="text-red-500"
                            v-if="showErrors && !$v.formData.name.required"
                        >Please enter your name.</div>
                    </div>
                    <div
                        class="w-full mt-8"
                        :class="{ 'border-red-400': $v.formData.email.$error }"
                    >
                        <div class="flex flex-row justify-between">
                            <label for="email" class>Email</label>
                            <span
                                class="text-red-500 font-semibold ml-6 text-sm text-right"
                            >Field is required</span>
                        </div>
                        <input
                            class="border-gray-500 border-2 w-full h-10 pl-2"
                            type="text"
                            name="email"
                            placeholder="email"
                            v-model="formData.email"
                        />
                        <div
                            class="text-red-500"
                            v-if="showErrors && (!$v.formData.email.required || !$v.formData.email.email)"
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
                                class="text-red-500"
                                v-if="showErrors && !$v.formData.phone.mustBePhone"
                            >Please enter a valid phone number.</div>
                        </div>
                    </div>
                    <div class="w-full mt-8">
                        <div class="flex flex-row justify-between">
                            <label for="message">Message</label>
                            <span
                                class="text-red-500 font-semibold ml-6 text-sm text-right"
                            >Field is required</span>
                        </div>
                        <textarea
                            rows="5"
                            class="border-gray-500 border-2 w-full pl-2"
                            type="text"
                            name="message"
                            v-model="formData.message"
                        ></textarea>
                        <div
                            class="text-red-500"
                            v-if="showErrors && (!$v.formData.message.required || !$v.formData.message.minLength)"
                        >Please enter a message of at least 10 characters.</div>
                    </div>
                    <button
                        class="bg-outerSpace text-white text-lg mt-8 h-16 rounded-lg shadow-lg w-full"
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
        </section>
        <PopularProducts v-if="messageSent" colCount="4" />
    </Layout>
</template>

<script>
import PopularProducts from "~/components/PopularProducts";
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
    components: {
        PopularProducts,
    },
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
                message: "",
            },
        };
    },
    validations: {
        formData: {
            name: {
                required,
            },
            email: {
                email,
                required,
            },
            phone: {
                mustBePhone,
            },
            message: {
                required,
                minLength: minLength(10),
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
        async sendInquiry() {
            if (this.formData.country) {
                this.formData.countryCode = this.countries.find(
                    (c) => c.code == this.formData.country
                ).dial_code;
            }
            let options = {
                method: "post",
                body: JSON.stringify(this.formData),
            };
            if (this.$v.$invalid) {
                this.showErrors = true;
            } else {
                this.sending = !this.sending;
                try {
                    let response = await fetch("/api/general_inquiry", options);
                    let data = await response.json();
                    if (data.body.error || data.body.errno) {
                        this.messageError = true;
                    } else {
                        this.messageSent = true;
                        this.formData.name = "";
                        this.formData.email = "";
                        this.formData.phone = "";
                        this.formData.country = "";
                        this.formData.countryCode = "";
                        this.formData.message = "";
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

<template>
    <div class="md:max-w-lg mx-auto">
        <div class :class="{ 'block': messageSent, 'hidden': !messageSent }">
            <p class="text-2xl">Thank you for reviewing {{ $page.product.name }}</p>
        </div>
        <form :class="{ 'pointer-events-none': sending, 'hidden': messageSent }">
            <div class="flex flex-col justify-between items-center mb-6">
                <div class="flex justify-between items-center w-full">
                    <label for="name" class="text-lg">Name</label>
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
                <span
                    class="text-red-500 ml-6 text-right"
                    v-if="showErrors && !$v.formData.name.required"
                >Please enter a name.</span>
            </div>
            <div class="flex flex-col justify-between items-center mb-6">
                <div class="flex justify-between items-center w-full">
                    <label for="rating" class="text-lg">Rating</label>
                    <span
                        class="text-red-500 font-semibold ml-6 text-sm text-right"
                    >Field is required</span>
                </div>
                <Stars
                    :starRating="formData.rating"
                    @update-rating="updateRating"
                    class="w-full mt-4"
                />
                <div
                    class="text-red-500"
                    v-if="showErrors && !$v.formData.rating.required"
                >Please select a rating with a minimum of one star.</div>
            </div>
            <div class="flex flex-col justify-between items-center mb-6">
                <div class="flex justify-between items-center w-full">
                    <label for="comment" class="text-lg">Comment</label>
                    <span
                        class="text-red-500 font-semibold ml-6 text-sm text-right"
                    >Field is required</span>
                </div>
                <textarea
                    rows="5"
                    class="border-gray-500 border-2 w-full p-2"
                    type="text"
                    name="comment"
                    placeholder="comment"
                    v-model="formData.comment"
                ></textarea>
                <span
                    class="text-red-500 ml-6 text-right"
                    v-if="showErrors && (!$v.formData.comment.required || !$v.formData.comment.minLength)"
                >Please enter at least 10 characters.</span>
            </div>
            <div class="flex justify-between items-center w-full">
                <label for="hideName" class="text-lg pr-2">
                    Remain Anonymous
                    <p
                        class="text-sm"
                    >If you do not want your name displayed on the site please check this box.</p>
                </label>
                <input
                    class="border-gray-500 border-2 h-10 pl-2 w-8"
                    type="checkbox"
                    name="hideName"
                    id="hideName"
                    v-model="formData.hideName"
                />
            </div>
            <button
                class="bg-outerSpace text-white text-lg mt-8 h-16 rounded-lg shadow-lg w-full"
                @click.prevent="sendInquiry"
            >
                <span v-if="!sending">Submit</span>
                <g-image v-else src="~/assets/loader.svg" class="w-10 text-center mx-auto">sending</g-image>
            </button>
        </form>
    </div>
</template>

<script>
import Stars from "~/components/Stars";
import { validationMixin } from "vuelidate";
import {
    required,
    minLength,
    minValue,
    integer,
} from "vuelidate/lib/validators";
export default {
    name: "ProductReviewForm",
    mixins: [validationMixin],
    components: {
        Stars,
    },
    data() {
        return {
            sending: false,
            messageSent: false,
            messageError: false,
            showErrors: false,
            formData: {
                name: "",
                rating: "",
                comment: "",
                hideName: false,
            },
        };
    },
    validations: {
        formData: {
            name: {
                required,
            },
            rating: {
                required,
            },
            comment: {
                minLength: minLength(10),
                required,
            },
        },
    },
    methods: {
        updateRating(value) {
            this.formData.rating = value;
        },
        async sendInquiry() {
            let formData = {
                productData: this.$page.product,
                formData: this.formData,
            };
            let options = {
                method: "post",
                body: JSON.stringify(formData),
            };
            if (this.$v.$invalid) {
                this.showErrors = true;
            } else {
                this.sending = !this.sending;
                try {
                    let response = await fetch("/api/submit_review", options);
                    let data = await response.json();
                    if (data.body.error || data.body.errno) {
                        this.messageError = true;
                    } else {
                        this.messageSent = true;
                    }
                    this.formData.name = "";
                    this.formData.rating = "";
                    this.formData.comment = "";
                    this.formData.hideName = false;
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

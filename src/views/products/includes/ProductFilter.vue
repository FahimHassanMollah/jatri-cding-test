<script setup>
import { ref, watch } from 'vue';
const emit = defineEmits(["ratingFilterHandler", "priceFilterHandler"]);

const selectedRatingOption = ref(null);
const selectedPriceOption = ref(null);

watch(selectedRatingOption, (selectedRatingOption) => {
    if (selectedRatingOption == "Accending" || selectedRatingOption == "Decending") {
        emit("ratingFilterHandler", selectedRatingOption);
    }
    if (selectedRatingOption !== null) {
        selectedPriceOption.value = null;
    }
})

watch(selectedPriceOption, (selectedPriceOption) => {
    if (selectedPriceOption == "Accending" || selectedPriceOption == "Decending") {
        emit("priceFilterHandler", selectedPriceOption);
    }
    if (selectedPriceOption !== null) {
        selectedRatingOption.value = null;
    }
})

</script>

<template>
    <div class="flex flex-row justify-end py-4">
            <div>
                <label for="price">Price:</label>

                <select v-model="selectedPriceOption" name="price" id="price">
                    <option value="" disabled selected>Select</option>
                    <option value="Accending">Accending</option>
                    <option value="Decending">Decending</option>
                </select>
            </div>
            <div class="ml-3">
                <label for="rating">Rating:</label>

                <select v-model="selectedRatingOption" name="rating" id="rating">
                    <option value="" disabled selected>Select</option>
                    <option value="Accending">Accending</option>
                    <option value="Decending">Decending</option>
                </select>
            </div>


    </div>
</template>
<template>
    <div
        @click.prevent="toggle(false)"
        @contextmenu.prevent="toggle(true)"
        :id="item.id"
        :class="{ checked: item.state != 0 }"
        :style="`background-image: url('${pic}')`"
    ></div>
</template>

<script>
export default {
    name: "Item",

    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    computed: {
        pic() {
            if (this.item.state <= 1) {
                return this.item.pics[0];
            }

            return this.item.pics[this.item.state - 1];
        },
    },

    methods: {
        toggle(isRightClick = false) {
            let state = this.item.state + (isRightClick ? -1 : 1);

            if (state > this.item.itemPool) {
                state = 0;
            } else if (state < 0) {
                state = this.item.itemPool;
            }

            this.item.state = state;
            this.$emit("itemEv", this.item);
        },
    },
    
    mounted() {
        this.$emit("itemEv", this.item);
    },
};
</script>

<style scoped>
div.checked {
    filter: grayscale(0%);
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center;
    user-select: none;
    cursor: pointer;
}

div {
    filter: grayscale(90%);
    opacity: 0.4;
    background-repeat: no-repeat;
    background-position: center;
    user-select: none;
    cursor: pointer;
}
</style>

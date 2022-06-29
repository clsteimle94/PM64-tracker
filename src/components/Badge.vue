<template>
    <div
        @click.prevent="toggle(false)"
        @contextmenu.prevent="toggle(true)"
        :id="badge.id"
        :class="{ checked: badge.state != 0 }"
        :style="`background-image: url('${pic}')`"
    ></div>
</template>

<script>
export default {
    name: "Badge",

    props: {
        badge: {
            type: Object,
            required: true,
        },
    },

    computed: {
        pic() {
            if (this.badge.state <= 1) {
                return this.badge.pics[0];
            }

            return this.badge.pics[this.badge.state - 1];
        },
    },

    methods: {
        toggle(isRightClick = false) {
            let state = this.badge.state + (isRightClick ? -1 : 1);

            if (state > this.badge.itemPool) {
                state = 0;
            } else if (state < 0) {
                state = this.badge.itemPool;
            }

            this.badge.state = state;
            this.$emit("itemEv", this.badge);
        },
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

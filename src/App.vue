<template>
    <div id="app">

        <div id="tracker" class="tracker-container">
            <div id="collectables" class="collectables-container">
                <div id="upgrades" class="upgrade-container">
                    <Item
                        v-for="item in trackerState.upgrades"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="partners" class="partner-container">
                    <Item
                        v-for="item in trackerState.partners"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="ch1" class="ch1-container">
                    <Item
                        v-for="item in trackerState.ch1"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="ch2" class="ch2-container">
                    <Item
                        v-for="item in trackerState.ch2"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="ch3" class="ch3-container">
                    <Item
                        v-for="item in trackerState.ch3"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="ch4" class="ch4-container">
                    <Item
                        v-for="item in trackerState.ch4"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="ch5" class="ch5-container">
                    <Item
                        v-for="item in trackerState.ch5"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="ch6" class="ch6-container">
                    <Item
                        v-for="item in trackerState.ch6"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="ch7" class="ch7-container">
                    <Item
                        v-for="item in trackerState.ch7"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
                <div id="misc" class="misc-container">
                    <Item
                        v-for="item in trackerState.misc"
                        :key="item.id"
                        :item="item"
                        @itemEv="fetchData($event)"
                    />
                </div>
            </div>

            <div id="counters" class="counter-container">
                <div>Counter: </div>
                <Counter 
                    :counter="trackerState.counters[0]"
                    @counterEv="fetchData($event)"
                />
            </div>

            <div id="logic" class="logic-container">
                <div>Chapter 1</div>
                <div id="ch1Check" class="logicCheck">No</div>
                <div>Chapter 2</div>
                <div id="ch2Check" class="logicCheck">No</div>
                <div>Chapter 3</div>
                <div id="ch3Check" class="logicCheck">No</div>
                <div>Chapter 4</div>
                <div id="ch4Check" class="logicCheck">No</div>
                <div>Chapter 5</div>
                <div id="ch5Check" class="logicCheck">No</div>
                <div>Chapter 6</div>
                <div id="ch6Check" class="logicCheck">No</div>
                <div>Chapter 7</div>
                <div id="ch7Check" class="logicCheck">No</div>
            </div>

            <div id="defense" class="defense-container">
                <DefenseTracker/>
            </div>

        </div>
    </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Item from "./components/Item.vue";
import DefenseTracker from "./components/DefenseTracker.vue"
import { trackerContent } from "./items";
import { updateLogic, updateItem } from "./logic";
import "./app.css";

export default {
    name: "App",

    components: {
        Counter,
        Item,
        DefenseTracker,
    },

    data() {
        return {
            trackerState: trackerContent,
        };
    },

    methods: {
        fetchData(data) {
            updateItem(data);
            updateLogic();
        },
    },

    mounted() {
        updateLogic();
    },
};

</script>

<style scoped>
nav {
    background-color: rgb(26, 26, 26);
    margin: 0;
    padding: 0;
    width: 100%;
    position: fixed;
    box-sizing: border-box;
    z-index:1;
    border-bottom: 1px solid black;
}
</style>

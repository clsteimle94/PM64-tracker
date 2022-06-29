<template>
    <div>
        <div>Defense  : {{ this.def }} </div>
        <div>On Block  : {{ this.blockdef + this.def}} </div>
        <div>Bowser Fire  : {{ this.fire }} </div>
        <div>Bowser Fire Block  : {{ this.fireblock }} </div>
        <div>Boswer Phsyical  : {{ this.phys }} </div>
        <div>Boswer Phsyical Block  : {{ this.physblock }} </div>
        <div id="badges" class="badge-container">
            <Badge
                v-for="badge in badges"
                :key="badge.id"
                :badge="badge"
                @itemEv="fetchData($event)"
            />
        </div>
    </div>
</template>

<script>
import Badge from "../components/Badge.vue";
import { badgeList } from "../badges";

export default {
    name: "DefenseTracker",

    components: {
        Badge,
    },

    data() {
        return {
            badges: badgeList,
            def: 0,
            blockdef: 1,
            fire: 10,
            fireblock: 9,
            phys: 8,
            physblock: 7,
            isLastStand: false,
            fireShield: 0,
        }
    },

    methods: {
        fetchData(badge) {
            // calculate defense
            if(badge.id == "defplus") {
                if(badge.state) this.def++;
                else this.def--;
            }
            else if(badge.id == "pupddown") {
                if(badge.state) this.def--;
                else this.def++;
            }
            else if(badge.id == "pdowndup") {
                if(badge.state) this.def++;
                else this.def--;
            }

            // calculate block defense
            else if(badge.id == "damagedodge1") {
                if(badge.state) this.blockdef++;
                else this.blockdef--;
            }
            else if(badge.id == "damagedodge2") {
                if(badge.state) this.blockdef++;
                else this.blockdef--;
            }

            // last stand?
            else if(badge.id == "laststand") {
                if(badge.state) this.isLastStand = true;
                else this.isLastStand = false;
            }

            // fire shield?
            else if(badge.id == "fireshield") {
                if(badge.state) this.fireShield = 1;
                else this.fireShield = 0;
            }

            // compute damages
            if(this.isLastStand){
                this.fire = Math.floor((10 - this.def - this.fireShield) / 2);
                this.fireblock = Math.floor((10 - this.def - this.blockdef - this.fireShield) / 2);
                this.phys = Math.floor((8 - this.def) / 2);
                this.physblock = Math.floor((8 - this.def - this.blockdef) / 2);
            }
            else {
                this.fire = 10 - this.def - this.fireShield;
                this.fireblock = 10 - this.def - this.blockdef - this.fireShield;
                this.phys = 8 - this.def;
                this.physblock = 8 - this.def - this.blockdef;
            }

        },
    },
};
</script>

<style scoped>

.badge-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(7, 32px);
    grid-template-rows: 28px;
    padding: 4px;
}

</style>

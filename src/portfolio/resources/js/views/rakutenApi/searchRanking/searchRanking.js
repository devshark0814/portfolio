import { $WebAPI } from "@/commonjs/WebAPI";

export default {
    data() {
        return{
            selectItems: [
                { text: "10代", value: 10 },
                { text: "20代", value: 20 },
                { text: "30代", value: 30 },
                { text: "40代", value: 40 },
                { text: "50代", value: 50 },
            ],
            genreId: '',
            age: null,
            sex: null,
        }
    },

    mounted() {
    },

    methods: {
        clickSearchBtn() {
            console.log("genreId: " + this.genreId + " age: " + this.age + " sex: " + this.sex);

        },
        clickClearBtn() {
            this.genreId = '';
            this.age = null;
            this.sex = null;
        }
    }
};

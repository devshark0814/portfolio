import draggable from "vuedraggable";
import kanbancard from "@/views/kanban/kanbanCard.vue";

export default {
    components: {
        draggable: draggable,
        kanbancard: kanbancard
    },
    data() {
        return {
            kanbans: [
                {
                    kanban_type: 1,
                    kanban_name: "タスク",
                    items: [
                        {
                            title: "サンプルタイトル",
                            body: "サンプル",
                            progress: 30,
                            type:1,
                        }
                    ]
                },
                {
                    kanban_type: 2,
                    kanban_name: "進行中",
                    items: []
                },
                {
                    kanban_type: 3,
                    kanban_name: "確認中",
                    items: []
                },
                {
                    kanban_type: 4,
                    kanban_name: "完了",
                    items: []
                }
            ],
            dialog: false,
            cardItem: {
                title: "",
                body: "",
                progress: 0,
                type:1
            },
            toCardType: 1,
            
            title: "",
            body: "",
            progress: 10,
        };
    },

    computed: {
        taskCount: function() {
            return function(index) {
                return this.kanbans[index].items.length;
            };
        }
    },

    methods: {
        openDialog() {
            this.cardItem = {};
            this.dialog = !this.dialog;
        },
        clickAddItem() {
            let obj = {
                title: this.title,
                body: this.body,
                progress: this.progress,
                type:1
            }
            this.kanbans[0].items.push(obj);
        },
        onEnd(event) {
            let arr = this.kanbans.map(kanban => {
                let items = kanban.items;
                let type = kanban.kanban_type;
                let arr2 = items.map(item => {
                    item.type = type;
                    return item;
                });
                kanban.items = arr2;
                return kanban;
            });
            this.kanbans = arr;
        },
    }
};

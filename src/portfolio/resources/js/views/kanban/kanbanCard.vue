<template>
    <div>
        <v-card class="task_card_header" v-bind:class="card_class" @click="clickCard">
            <v-card-text>
                <div class="task_title">タイトル: {{ card_title }}</div>
                <div class="task_body">本文: {{ card_body }}</div>
                <div>
                    <v-progress-linear
                        v-model="card_progress"
                        :color="typeColor"
                        disabled
                    >
                    </v-progress-linear>
                </div>
            </v-card-text>
        </v-card>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">編集</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="card_title" label="タスクタイトル" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="card_body" label="タスク詳細" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="card_progress" label="タスク進捗" type="number" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        閉じる
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        保存
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script src="./kanbanCard.js"></script>
<style src="./kanbanCard.css"></style>

<template>
    <v-container>
        <v-row>
            <v-col cols="3" v-for="(kanban, i) in kanbans" :key="i">
                <v-card id="parentCard" height="100%">
                    <v-card-subtitle>
                        <span class="card_header">{{ kanban.kanban_name }}</span>
                        <span>{{ taskCount(i) }}件</span>
                    </v-card-subtitle>
                    <v-card-text>
                        <draggable
                            :list="kanban.items"
                            tag="ul"
                            :options="{ group: 'ITEMS', animation: 150 }"
                            @end="onEnd"
                        >
                            <template v-for="(item, j) in kanban.items">
                                <kanbancard
                                    :key="j"
                                    :card_type="item.type"
                                    :card_title="item.title"
                                    :card_body="item.body"
                                    :card_progress="item.progress"
                                />
                            </template>
                        </draggable>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-btn
            fab
            color="#79fd69"
            top
            right
            absolute
            @click="openDialog"
            style="z-index:6"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">編集</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="title"
                                    label="タスクタイトル"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="body"
                                    label="タスク詳細"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="progress"
                                    label="タスク進捗"
                                    type="number"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        閉じる
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="clickAddItem">
                        保存
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script src="./kanban.js"></script>
<style src="./kanban.css"></style>

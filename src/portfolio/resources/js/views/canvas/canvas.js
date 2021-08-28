//ライブラリのインポート
import { ImageEditor } from "@toast-ui/vue-image-editor";

// アイコンのインポート
import icon_a from "tui-image-editor/dist/svg/icon-a.svg";
import icon_b from "tui-image-editor/dist/svg/icon-b.svg";
import icon_c from "tui-image-editor/dist/svg/icon-c.svg";
import icon_d from "tui-image-editor/dist/svg/icon-d.svg";

// ライブラリ側で用意しているスタイルの読み込み
import "tui-image-editor/dist/tui-image-editor.css";

// ダウンロード機能を使う際はインポートする
import "file-saver";

//表示される各要素のスタイルを指定
var theme = {
    //共通のスタイル
    "common.bi.image": "",
    "common.bisize.width": "0px",
    "common.bisize.height": "0px",
    "common.backgroundImage": "none",
    "common.backgroundColor": "#FFFFFF",
    "common.border": "0px",
    // ヘッダー
    "header.backgroundImage": "none",
    "header.backgroundColor": "transparent",
    "header.border": "0px",
    // ファイルアップロードボタンのスタイル
    "loadButton.backgroundColor": "#fff",
    "loadButton.border": "1px solid #ddd",
    "loadButton.color": "#222",
    "loadButton.fontFamily": "NotoSans, sans-serif",
    "loadButton.fontSize": "12px",
    // ダウンロードボタンのスタイル
    "downloadButton.backgroundColor": "#fdba3b",
    "downloadButton.border": "1px solid #fdba3b",
    "downloadButton.color": "#fff",
    "downloadButton.fontFamily": "NotoSans, sans-serif",
    "downloadButton.fontSize": "12px",
    // メインアイコン
    "menu.normalIcon.path": icon_d,
    "menu.activeIcon.path": icon_b,
    "menu.disabledIcon.path": icon_a,
    "menu.hoverIcon.path": icon_c,
    // サブメニューアイコン
    "submenu.normalIcon.path": icon_d,
    "submenu.activeIcon.path": icon_c,
    // submenu primary color
    "submenu.backgroundColor": "#ffffff",
    "submenu.partition.color": "#858585",
    // サブメニュー
    "submenu.normalLabel.color": "#858585",
    "submenu.normalLabel.fontWeight": "lighter",
    "submenu.activeLabel.color": "#000",
    "submenu.activeLabel.fontWeight": "lighter",
    // チェックボックス
    "checkbox.border": "1px solid #ccc",
    "checkbox.backgroundColor": "#fff",
    // 切り取り
    "range.pointer.color": "#000",
    "range.bar.color": "#666",
    "range.subbar.color": "#d1d1d1",
    "range.value.color": "#000",
    "range.value.fontWeight": "lighter",
    "range.value.fontSize": "11px",
    "range.value.border": "1px solid #353535",
    "range.value.backgroundColor": "#151515",
    "range.title.color": "#000",
    "range.title.fontWeight": "lighter",
    // colorpicker
    "colorpicker.button.border": "1px solid #1e1e1e",
    "colorpicker.title.color": "#fff"
};

export default {
    components: {
        "tui-image-editor": ImageEditor
    },
    props: {},
    data() {
        return {
            useDefaultUI: true,
            options: {
                cssMaxWidth: document.documentElement.clientWidth,
                cssMaxHeight: document.documentElement.clientHeight,
                includeUI: {
                    //表示メニューの設定。デフォルトでは全て表示される
                    //menu: ["flip", "crop", "rotate", "filter"],
                    //コンポーネント生成時に選択されるメニューの指定
                    initMenu: "filter",
                    //メニューバーの位置の指定
                    menuBarPosition: "buttom",
                    uiSize: {
                        width: "100%",
                        height: "100%"
                    },
                    theme: theme
                }
            }
        };
    }
};

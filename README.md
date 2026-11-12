# 3D Manga Studios ドキュメント（MkDocs Material）

## 見る・書き出す

```bash
pip install -r requirements.txt   # mkdocs-material を入れる（MkDocs 2.0 は非対応のため 1.x に固定）
mkdocs serve                      # http://127.0.0.1:8000 で確認（保存すると自動で更新）
mkdocs build                      # site/ に静的サイトを書き出す
# 公開（バージョン切り替え・mike）: https://nekonote-kobo.github.io/3d-manga-studios/
mike deploy -F mkdocs_版切り替え対応.yml -t "1.2.0 beta" -u --push 1.2 latest
# 旧版 1.0.1 は gh-pages の /1.0/ に保存済み（ソースは v1.0 ブランチ）。gh-deploy は使わない（版が消えるため）
```

## フォルダ構成

| 場所 | 内容 |
|---|---|
| `mkdocs.yml` | サイトの設定・ナビゲーション |
| `docs/index.md` | トップページ |
| `docs/getting-started/` | はじめに・インストール・ライセンス認証 |
| `docs/guide/` | 機能ガイド（シーン・マテリアル・輪郭線・背景・エフェクト） |
| `docs/spec/` | マテリアル仕様（MTS・MTE・MTM・MTB） |
| `docs/assets/img/` | レンダー画像・アイコン |
| `docs/assets/placeholder/` | **仮画像**（UI のスクリーンショットに差し替える） |
| `docs/stylesheets/extra.css` | 見た目（原稿用紙・コマ割りのテーマ） |
| `docs/javascripts/extra.js` | 比較スライダー・エフェクト一覧・概要図など |

## 仮画像の差し替え

`docs/assets/placeholder/` の PNG を、同じファイル名のスクリーンショットで上書きすれば差し替わります（縦横比は自由）。

| ファイル | 撮るもの | 使っているページ |
|---|---|---|
| ui_sidebar_overview.png | サイドバー「3D Manga Studios」タブ全体 | インストール・機能ガイド |
| ui_scene_collection.png | シーン（3D漫画コレクションを作成） | シーン |
| ui_camera.png | シーン › カメラ | シーン |
| ui_distortion.png | カメラ › 歪み補正 | シーン |
| ui_lights.png | シーン › ライト | シーン |
| ui_linking.png | ライト › ライトリンキング | シーン |
| ui_material.png | マテリアル（基本） | マテリアル |
| ui_eye.png | マテリアル › 目 | マテリアル |
| ui_eye_props.png | プロパティ › マテリアル › Manga Toon Eye | マテリアル |
| ui_mouth.png | マテリアル › 口 | マテリアル |
| ui_outline.png | 輪郭線（①②③） | 輪郭線 |
| ui_outline_list.png | プリセットと輪郭線の一覧 | 輪郭線 |
| ui_bg.png | 背景・エフェクト › 背景 | 背景・エフェクト |
| ui_ground.png | 背景・エフェクト › 地面 | 背景・エフェクト |
| ui_fx.png | 背景・エフェクト › エフェクト | 背景・エフェクト |
| ui_balloon.png | 背景・エフェクト › 吹き出し | 背景・エフェクト |
| ui_prefs_license.png | プリファレンス › アドオン › ライセンス欄 | ライセンス認証 |
| ui_viewport_result.png | サンプルシーンの仕上がり | トップ |

差し替えたら、各ページの図の説明文にある「（仮画像）」を消してください。

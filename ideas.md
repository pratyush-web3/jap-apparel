# 日本アパレル産業ウェブサイト - デザイン構想

## 選定デザイン哲学: 「モダン・インダストリアル・ミニマリズム」

### Design Movement
**Modern Industrial Minimalism** - 日本の製造業の本質を表現する、洗練された工業デザイン美学。ミニマルな視覚言語で複雑な製造プロセスを明確に伝える。

### Core Principles

1. **Clarity Through Reduction** - 不要な装飾を排除し、本質的な情報のみを視覚化。製造業の誠実さと透明性を表現。
2. **Precision & Grid-Based Structure** - 厳密なグリッドシステムと正確な配置で、品質管理と製造精度を体現。
3. **Material Honesty** - 色・タイポグラフィ・スペースが本来の役割を果たす。虚飾なく、実質的な価値を伝える。
4. **Subtle Motion** - GSAP アニメーションは控えめで、製造工程の流れを自然に表現。派手さではなく、信頼性を強調。

### Color Philosophy

**Primary Background:** #F3F6F7 (冷たい白)
- 清潔感、透明性、技術的信頼性を表現
- 工場の明るい照明環境を連想させる

**Primary Accent:** #2F6972 (深い青緑)
- 日本の伝統色「紺青」と現代性の融合
- 信頼性、安定性、プロフェッショナリズムを象徴
- 見出しと重要なCTAに使用

**Secondary Accent:** #4E7B5A (深い緑)
- サステナビリティと環境への配慮を表現
- 自然素材と持続可能な製造プロセスを連想させる
- サステナビリティセクションの主要色

**Highlight:** #B88A4A (温かみのあるゴールド)
- 日本の工芸品の価値と品質を表現
- 重要な統計情報やハイライト要素に使用
- 冷色系の背景とのコントラストで視線を引く

**Text:** #253033 (深いグレー)
- 高いコントラスト、読みやすさを確保
- 工業的で信頼性のある雰囲気

**Muted Text:** #667074 (中程度のグレー)
- 二次情報、補足説明用
- 視覚的階層を作成

**Decorative:** #C7D2D5 (淡いグレー)
- 区切り線、背景パターン、装飾要素
- 全体の統一感を保ちながら視覚的な深さを追加

### Layout Paradigm

**非対称・モジュール型レイアウト**
- 左右対称の中央配置を避け、非対称な配置で動的性を表現
- 3カラムから2カラムへの段階的な情報開示
- ヒーローセクション: 左に大きなテキスト、中央に視覚化、右に統計情報
- 製造工程セクション: 左から右への流れで時系列プロセスを表現
- 非対称グリッドで、各セクションが独自の構造を持つ

### Signature Elements

1. **Process Flow Visualization**
   - 製造工程を左から右への流れで表現
   - 各ステップを円形のノードで表示、線で接続
   - GSAP で段階的に表示、カウンターアニメーション

2. **Material Showcase Cards**
   - 素材の特性を視覚化するカード
   - 微妙なホバーエフェクト、背景色の変化
   - 素材の質感を暗示する背景パターン

3. **Statistics Counter Blocks**
   - 大きな数字で製造能力を表現
   - 下部にラベルと単位
   - GSAP で数字がカウントアップするアニメーション

### Interaction Philosophy

- **Purposeful Motion**: すべてのアニメーションが情報伝達の目的を持つ
- **Subtle Hover States**: ボタン・カードのホバーで色の微妙な変化、スケール 1.02 程度の拡大
- **Scroll Reveal**: セクションが画面に入るとGASPで段階的に表示
- **No Distraction**: ユーザーの注意を散らさない、信頼性を損なわない動き

### Animation Guidelines (GSAP)

- **Timeline Animations**: 複数の要素が連鎖的に表示される
- **Manufacturing Process Reveals**: 製造工程が左から右へ段階的に表示
- **Statistics Counters**: 数字が0からカウントアップ（期間: 2秒）
- **Material Showcase Transitions**: カード間の遷移は smooth で、150-250ms の期間
- **Section Reveal Animations**: スクロール時にセクションが下から上へ浮かぶ（opacity + translateY）
- **Timing**: すべてのアニメーション < 300ms（ただしカウンターは2秒）
- **Easing**: cubic-bezier(0.23, 1, 0.32, 1) for enter/exit

### Typography System

**Headings: 日本語対応のモダンサンセリフ**
- Font: Noto Sans JP (Google Fonts) - 日本語の可読性と現代性を兼ね備える
- Weight: 700 (Bold) for main headings, 600 (SemiBold) for subheadings
- Size: 
  - H1: 3.5rem (56px) - ヒーロータイトル
  - H2: 2.5rem (40px) - セクションタイトル
  - H3: 1.875rem (30px) - サブセクションタイトル
  - H4: 1.5rem (24px) - カード見出し

**Body: 清潔で読みやすいサンセリフ**
- Font: Noto Sans JP (Google Fonts) - 統一感を保ちながら、本文の読みやすさを確保
- Weight: 400 (Regular) for body text, 500 (Medium) for emphasis
- Size: 1rem (16px) - 本文、1.125rem (18px) - リード文
- Line Height: 1.6 - 読みやすさを確保

**Accent Typography**
- Small caps や letter-spacing を活用して、ラベルやキャプションを強調
- 数字は tabular numerals で揃える

---

## 非選定デザイン案

### 案1: 「ジャパニーズ・トラディショナル・モダン」
- 伝統的な日本美学（わび・さび）と現代技術の融合
- 確率: 0.08

### 案2: 「ハイテック・フューチャリズム」
- 科学技術的な未来志向のビジュアル
- 確率: 0.06

import type React from 'react';
import { WorkCard } from '../components/molecules/card/WorkCard';
import { MediaObject } from '../components/organisms/MediaObject';

const descriptions = [
	{ id: 0, description: '成果物について紹介するページです。' },
	{
		id: 1,
		description:
			'Webアプリケーション開発のアルバイトや、産学連携の研究など、一部詳細を非公開としているものもあります。',
	},
	{
		id: 2,
		description: '組み込み開発からサーバー構築やAWS, Google Cloud など、色々やってます。',
	},
];

// 各成果物カードに渡す情報についてのオブジェクト
const productsData = [
	{
		id: 0,
		src: '/images/etrobocon/driving.png',
		alt: '走行帯が走っている写真とモデルの画像',
		workTitle: 'ETロボコン',
		techs: ['C++', 'Python'],
		modalTexts: [
			'学生時代に最も力を入れて活動していた、ETロボコンです。',
			'リアルコース上を機械に走らせて点数を競う走行部門と、設計書の出来を評価するモデル部門があります。',
			'2023年は九州地区大会で総合優勝、全国大会で総合6位の成績を収めました。',
			'2024年はチームリーダーを務め、九州地区大会で総合準優勝、モデル優勝の成績を収めました。',
			'10人ほどで半年間開発を続け、コード量はテスト含めて9000行から10000行ほど。',
		],
	},
	{
		id: 1,
		src: '/images/products/part_time_job.png',
		alt: 'Webアプリケーションのアルバイトでの技術スタック',
		workTitle: 'エンジニアバイト',
		techs: ['TypeScript', 'Tailwindcss', 'Storybook'],
		modalTexts: [
			'Webアプリケーション開発のアルバイトに1年強従事。',
			'主にフロントを担当しており、現在は AWS, Google Cloud も利用。',
		],
	},
	{
		id: 2,
		src: '/images/products/server.png',
		alt: 'サーバー構築',
		workTitle: 'サーバー構築',
		techs: ['Apache', 'Roundcube', 'Sympa'],
		modalTexts: [
			'研究室のサーバー移転に伴い、Webサーバー、メールサーバー、メーリングリストサーバーを構築。',
			'OpenSSHやApacheの脆弱性対応など、脆弱性には随時対応中。卒業まで保守作業を続ける予定。',
			'定期監査では一回で脆弱性ゼロの報告をいただきました。',
		],
	},
	{
		id: 3,
		src: '/images/products/OnFes.jpg',
		alt: 'ハッカソンで開発したWebアプリ OnFes',
		workTitle: 'OnFes',
		techs: ['React', 'Tailwindcss', 'TanStack Router'],
		modalTexts: [
			'技育CAMPハッカソンにて、「祭」というテーマをオンラインフェスとして消化し、作成。',
			'同じ趣味を持っている人が自己紹介や成果物を投稿し、交流できるというWebアプリ。',
			'1週間の開発期間で、4人で開発を進める。フロント・バックでひとりずつ経験者・未経験者を割り振り、ペアプロ形式で進行。',
			'フロントの経験者として開発を進め、コンポーネント全体の設計やカスタムフック、自己紹介・成果物の閲覧ページを担当。',
		],
	},
	{
		id: 4,
		src: '/images/OnFes.jpg',
		alt: 'ハッカソンで開発したWebアプリ Tacktail',
		workTitle: 'Tacktail',
		techs: ['Next.js', 'Golang', 'CSS modules'],
		modalTexts: [
			'LINEヤフー主催のハッカソン Open Hack U にて、カクテルのレシピを教えてくれるWebアプリを現在作成中。',
			'カクテルは敷居が高い印象があるものの、実は1杯200円弱で作れるものも。簡単なものから作れるストーリーモードや、自分が作成したカクテルの画像をカクテルレシピの画像として登録できるコレクション機能を実装。',
			'現在も継続開発中で、オリジナルのカクテルレシピを投稿できる機能や、レシピ検索時にフィルタリングをかけられる機能を実装予定。',
			'2週間の開発期間(ハッカソン中)で、3人で開発を進める。フロント・バック両方を担当しつつ、Auth.js を用いたバックエンドで生成したトークンを共有する認証機能、Supabase を用いたコレクション機能での画像アップロード機能、バックエンドのデプロイも担当。',
		],
	},
	{
		id: 5,
		src: '/images/portfolio.png',
		alt: 'ポートフォリオサイトのメインページ',
		workTitle: 'ポートフォリオサイト',
		techs: ['Next.js', 'Tailwindcss', 'Storybook'],
		modalTexts: [
			'ポートフォリオサイト。現在も更新中。',
			'Biome や Vercel の CI 、Storybook の導入など、個人開発では不要なものも使いたかったので利用。',
		],
	},
	{
		id: 6,
		src: '/images/icons/qiita-icon.png',
		alt: 'Qiitaの緑ロゴ',
		workTitle: 'Qiita記事投稿',
		modalTexts: [
			'2023年6月からおおよそ月1ペースで、Qiitaに記事を投稿。',
			'アルバイトで解決までに難航した内容や、ETロボコンについて、ハッカソンで行った環境構築など、多岐に渡って投稿。',
			'フロント分野やETロボコンや研究で使う C++, Python の内容を中心に投稿している。',
		],
	},
];

const Products: React.FC = () => {
	return (
		<>
			<div className='flex flex-col items-center py-4'>
				<h1 className='text-4xl font-bold text-center'>Products</h1>
				{descriptions.map((description) => (
					<p key={description.id} className='text-lg pt-4'>
						{description.description}
					</p>
				))}
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-y-12 place-items-center justify-center items-center'>
				{productsData.map((product) => (
					<WorkCard
						key={product.id}
						src={product.src}
						alt={product.alt}
						workTitle={product.workTitle}
						techs={product.techs || []}
						modalTexts={product.modalTexts}
					/>
				))}
			</div>
		</>
	);
};

export default Products;

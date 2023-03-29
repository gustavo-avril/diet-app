import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function firstBreakfast() {
	return (
		<>
			<Layout>
				<Head>
					<title>DietApp - Breakfast Options</title>
				</Head>
				<h1>
					Breakfast Number One
				</h1>
				<h2>
					<Link href="/">Home</Link>
				</h2>
			</Layout>
		</>
	);
}
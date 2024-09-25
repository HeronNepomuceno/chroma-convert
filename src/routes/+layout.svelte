<script lang="ts">
	import '../styles/general.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Guides:wght@400..700&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
	<header>
		<h1 class="title">Chroma Convert</h1>
		<h2 class="subtitle">Your colors in multiformats</h2>
	</header>

	<main>
		<slot></slot>
	</main>

	<footer>
		<span class="copyright">{`© ${new Date().getFullYear()} Heron Nepomuceno`}</span>
		<div class="networking">
			<a class="link" href="https://github.com/HeronNepomuceno" target="_blank">Github</a>
			<a class="link" href="https://www.linkedin.com/in/heron-nepomuceno-b3125b1b6/" target="_blank">Linkedin</a>
		</div>
	</footer>
</div>

<style>
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	header {
		align-items: center;
		border: solid 1px black;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		padding: 8px;
		margin-top: 32px;
	}

	.title {
		font-size: 32px;
	}

	.subtitle {
		font-size: 24px;
	}

	main {
		align-items: center;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	footer {
		align-items: center;
		display: flex;
		border-top: 1px solid #000;
		flex-direction: column;
		font-size: 20px;
		justify-content: center;
		padding: 32px;
	}

	.networking {
		display: flex;
		font-size: 18x;
		gap: 32px;
	}

	.link {
		color: #1e40af;
		transition: color .3s;
	}

	.link:hover {
		color: #0ea5e9;
	}

	@media screen and (min-width: 800px) {
		.title {
			font-size: 48px;
		}

		.subtitle {
			font-size: 32px;
		}

		footer {
			font-size: 26px;
		}

		.networking {
			font-size: 24px;
		}
	}

	@media screen and (min-width: 1000px) {
		.title {
			font-size: 64px;
		}

		.subtitle {
			font-size: 48px;
		}

		footer {
			font-size: 32px;
		}

		.networking {
			font-size: 28px;
		}
	}
</style>

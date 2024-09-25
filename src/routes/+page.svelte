<script lang="ts">
	import { hexToRgb, hexToHsl, hexToHsv, hexToCmyk } from "$lib";

	export let color: string = '#000000';
	const formats = ['HEX', 'RGB', 'HSL', 'HSV', 'CMYK'];

	$: results = (() => {
		return [
			color,
			hexToRgb(color),
			hexToHsl(color),
			hexToHsv(color),
			hexToCmyk(color)
		];
	})();
</script>

<section class="container">
	<h3 class="title">Select your color bellow:</h3>

	<div class="panel">
		
		<input class="color-picker" type="color" bind:value={color}>
		<div class="color-board">
			{#each formats as format, i}
				<div class="color-by-format">
					<span>{format}:</span>
					<span>{results[i]}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		min-height: 80dvh;
		padding: 0 32px;
		width: 100%;
		margin-top: 48px;
	}

	.title {
		font-size: 24px;
		margin-bottom: 16px;
	}

	.panel {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	.color-picker {
		animation: rotate 30s linear infinite;
		cursor: pointer;
		border-radius: 9999px;
		border: 2px dashed #000;
		height: 200px;
		margin-bottom: 32px;
		width: 200px;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.color-board {
		display: flex;
		flex-direction: column;
		border: 1px solid #000;
		border-radius: 8px;
		gap: 16px;
		padding: 8px;
		width: 300px;
	}

	.color-by-format {
		display: flex;
		justify-content: space-between;
	}

	span {
		font-family: 'Roboto', sans-serif;
	}

	@media screen and (min-width: 800px) {
		.title {
			font-size: 32px;
			margin-bottom: 32px;
		}

		.color-picker {
			height: 280px;
			width: 280px;
		}

		.color-board {
			font-size: 20px;
			width: 400px;
		}
	}
</style>

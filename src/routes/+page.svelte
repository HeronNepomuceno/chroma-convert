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
		
		<label class="input">
			<span class="label">Click to select</span>
			<input id="color-picker" type="color" bind:value={color}>
		</label>
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

	.input {
		position: relative;
	}

	.label {
		background: #000;
		border-radius: 999px;
		color: #e2e8f0;
		cursor: pointer;
		display: flex;
		font-family: 'Roboto', sans-serif;
		left: 50%;
		top: 45%;
		transform: translate(-50%, -45%);
		padding: 0 8px;
		position: absolute;
		z-index: 2;
		text-align: center;
	}

	#color-picker {
		cursor: pointer;
		border-radius: 9999px;
		border: 2px dashed var(--primary);
		height: 200px;
		margin-bottom: 32px;
		width: 200px;
	}

	.color-board {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--primary);
		border-radius: 8px;
		gap: 16px;
		padding: 8px;
		width: 300px;
	}

	.color-by-format {
		display: flex;
		justify-content: space-between;
	}

	.color-by-format > span {
		font-family: 'Roboto', sans-serif;
	}

	@media screen and (min-width: 800px) {
		.title {
			font-size: 32px;
			margin-bottom: 32px;
		}

		#color-picker {
			height: 280px;
			width: 280px;
		}

		.color-board {
			font-size: 20px;
			width: 400px;
		}
	}

	@media screen and (min-width: 1000px) {
		.title {
			font-size: 36px;
		}

		.color-board {
			font-size: 20px;
			width: 480px;
			margin-bottom: 80px;
		}
	}
</style>

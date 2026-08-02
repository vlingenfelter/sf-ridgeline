<!-- src/lib/components/ThemeToggle.svelte -->
<script lang="ts">
	import { theme } from '$lib/theme.svelte';
</script>

<div class="flex flex-col items-end gap-1.5 mb-4 sm:mb-auto">
	<div class="text-xs sm:text-sm flex items-center gap-1 bg-card-bg dark:bg-dark-card-bg p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
		<!-- 💻 System Preference Button -->
		<button
			onclick={() => theme.resetToSystem()}
			class="p-2 rounded-lg transition-all duration-150 {theme.isSystemDefault 
				? 'bg-bg dark:bg-dark-bg text-text dark:text-dark-text shadow-sm' 
				: 'text-slate-400 hover:text-button-text-hover dark:hover:text-dark-button-text-hover'}"
			aria-label="Sync with system theme preference"
			title="Use system preference"
		>
			<!-- Monitor/Device Icon -->
			<p>System</p>
		</button>

		<!-- ☀️ Light / 🌙 Dark Manual Toggle Button -->
		<button
			onclick={() => theme.toggle()}
			class="p-2 rounded-lg transition-all duration-150 {!theme.isSystemDefault 
				? 'bg-white dark:bg-slate-700 text-text dark:text-dark-text shadow-sm' 
				: 'text-slate-400 hover:text-button-text-hover dark:hover:text-dark-button-text-hover'}"
			aria-label="Toggle custom layout theme"
			title="Override theme manually"
		>
			{#if theme.current === 'light'}				<p>Light</p>
				
			{:else}
				<p>Dark</p>
			{/if}
		</button>
	</div>
</div>

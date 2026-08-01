<!-- src/lib/components/ThemeToggle.svelte -->
<script lang="ts">
	import { theme } from '$lib/theme.svelte';
</script>

<div class="flex flex-col items-end gap-1.5">
	<div class="flex items-center gap-1 bg-card-bg dark:bg-dark-card-bg p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
		<!-- 💻 System Preference Button -->
		<button
			onclick={() => theme.resetToSystem()}
			class="p-2 rounded-lg transition-all duration-150 {theme.isSystemDefault 
				? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
				: 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}"
			aria-label="Sync with system theme preference"
			title="Use system preference"
		>
			<!-- Monitor/Device Icon -->
			<svg
				xmlns="http://w3.org"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-4 h-4"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
				/>
			</svg>
		</button>

		<!-- ☀️ Light / 🌙 Dark Manual Toggle Button -->
		<button
			onclick={() => theme.toggle()}
			class="p-2 rounded-lg transition-all duration-150 {!theme.isSystemDefault 
				? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
				: 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}"
			aria-label="Toggle custom layout theme"
			title="Override theme manually"
		>
			{#if theme.current === 'light'}
				<!-- Sun Icon -->
				<svg
					xmlns="http://w3.org"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v2.25m0 13.5V23M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M3 12h2.25m13.5 0H23M4.22 19.78l1.59-1.59m12.38-12.38l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
					/>
				</svg>
			{:else}
				<!-- Moon Icon -->
				<svg
					xmlns="http://w3.org"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<!-- Status Text Label
	<span class="text-[10px] font-medium tracking-wide text-slate-400 dark:text-slate-500 mr-1 select-none">
		Active: {theme.isSystemDefault ? 'System' : theme.current}
	</span> -->
</div>

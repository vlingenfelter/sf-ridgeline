// src/lib/theme.ts
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

class ThemeManager {
	#current = $state<Theme>('light');
	// 👈 Track if we are bound to system settings or an explicit user pick
	#isSystemDefault = $state<boolean>(true); 

	constructor() {
		if (browser) {
			const savedTheme = localStorage.getItem('theme') as Theme | null;
			
			if (savedTheme === 'light' || savedTheme === 'dark') {
				this.#current = savedTheme;
				this.#isSystemDefault = false;
			} else {
				this.#current = this.#getSystemPreference();
				this.#isSystemDefault = true;
			}

			$effect.root(() => {
				$effect(() => {
					// Only save to localStorage if the user explicitly broke from system default
					if (this.#isSystemDefault) {
						localStorage.removeItem('theme');
					} else {
						localStorage.setItem('theme', this.#current);
					}

					if (this.#current === 'dark') {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
				});
			});
		}
	}

	#getSystemPreference(): Theme {
		if (!browser) return 'light';
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	get current(): Theme {
		return this.#current;
	}

	// 👈 Expose this state so you can hide/show the reset button in UI
	get isSystemDefault(): boolean {
		return this.#isSystemDefault;
	}

	set(value: Theme) {
		this.#current = value;
		this.#isSystemDefault = false;
	}

	toggle() {
		this.#current = this.#current === 'light' ? 'dark' : 'light';
		this.#isSystemDefault = false;
	}

	// 👈 New action to clear settings and reset instantly
	resetToSystem() {
		this.#isSystemDefault = true;
		this.#current = this.#getSystemPreference();
	}
}

export const theme = new ThemeManager();

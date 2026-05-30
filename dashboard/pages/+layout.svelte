<script>
	import "@evidence-dev/tailwind/fonts.css";
	import "../app.css";
	import { EvidenceDefaultLayout } from "@evidence-dev/core-components";
	export let data;
</script>

<EvidenceDefaultLayout {data} maxWidth="1600">
	<slot slot="content" />
</EvidenceDefaultLayout>

<footer
	class="mt-16 border-t border-gray-200 pt-6 pb-8 text-sm text-gray-500 text-center"
>
	<p>
		Built by Roxanna R ✨
		<a
			href="https://www.linkedin.com/in/roxannardgz/"
			target="_blank"
			class="underline"
		>
			LinkedIn
		</a>
		·
		<a
			href="https://github.com/roxannardgz/food-security-pipeline"
			target="_blank"
			class="underline"
		>
			GitHub Repo
		</a>
	</p>
</footer>

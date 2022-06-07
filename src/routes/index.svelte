<script>
	import { posts } from '../stores';
	import { onMount } from 'svelte';
	import { getData } from '../helpers';

	onMount(() => {
		getData().then((data) => posts.set(data));
	});
</script>

<ul>
	{#each $posts as post}
		<li>{post.body}</li>
	{/each}
</ul>

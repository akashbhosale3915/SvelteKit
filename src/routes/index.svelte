<script>
	import { posts } from '../stores';
	import { onMount } from 'svelte';
	const getData = async () => {
		let res = await fetch('https://jsonplaceholder.typicode.com/posts');
		res = await res.json();
		await posts.set(res);
	};
	onMount(() => {
		getData();
		console.log($posts, 'asasas', 'asasassa', 'sasasassa');
	});
</script>

<ul>
	{#each $posts as post}
		<li>{post.body}</li>
	{/each}
</ul>

export const getData = async () => {
	let res = await fetch('https://jsonplaceholder.typicode.com/posts');
	res = await res.json();
	return res;
};

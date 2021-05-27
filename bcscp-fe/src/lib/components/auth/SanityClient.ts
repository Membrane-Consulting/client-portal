import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

type Client = {
	projectId: string;
	dataset: string;
	token: string;
	apiVersion: string;
	useCdn: boolean;
};

const options: Client = {
	projectId: '5y93631y',
	dataset: 'production',
	apiVersion: '2021-05-01',
	token: '',
	useCdn: true
};

const client = sanityClient(options);

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
	return builder.image(source);
};

const makeUrl = (ref) => {
	const [_file, id, extension] = ref.split('-');
	return `https://cdn.sanity.io/files/${options.projectId}/${options.dataset}/${id}.${extension}`;
};

export { client, options, makeUrl, urlFor };


import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

function DetailPage() {
	const { id } = useParams();
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:3000/questions/${id}`)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<Layout>
			<div className="max-w-3xl mx-auto my-16">{data && <IdCard data={data} />}</div>
		</Layout>
	);
}

export default DetailPage;

function IdCard({ data }) {
	return (
		<div className="bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
			<div id="header" className="flex flex-col items-center">
				<img alt="avatar" className="w-40 h-40 object-cover rounded-full border-2 border-gray-300" src={data.user.imageURL} />
				<div id="header-text" className="leading-5 my-6 sm">
					<h4 id="name" className="text-xl font-semibold">
						{data.user.username}
					</h4>
				</div>
			</div>
			<div id="quote">
			<p className="italic text-gray-600 mb-8 text-xl font-medium">{data.question}</p>
				<p className="italic text-gray-600">{data.answer}</p>
			</div>
		</div>
	);
}

import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import QuestionCard from "./questionCard";

function QuestionsPage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/questions")
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<Layout>
			<div className="max-w-5xl mx-auto grid grid-cols-3 gap-10 my-16">
				{data.length > 0 &&
					data.map((question) => {
						return <QuestionCard key={question.id} question={question} />;
					})}
			</div>
		</Layout>
	);
}

export default QuestionsPage;

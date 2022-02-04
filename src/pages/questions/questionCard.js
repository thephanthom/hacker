import { Link } from "react-router-dom";

function QuestionCard({ question }) {
	return (
		<Link to={`/questions/${question.id}`} className="hover:shadow-xl">
			<div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
				<div id="header" className="flex items-center mb-4">
					<img alt="avatar" className="w-20 h-20 object-cover rounded-full border-2 border-gray-300" src={question.user.imageURL} />
					<div id="header-text" className="leading-5 ml-6 sm">
						<h4 id="name" className="text-xl font-semibold">
							{question.user.username}
						</h4>
						<h5 id="job" className="font-semibold text-blue-600">
							Designer
						</h5>
					</div>
				</div>
				<div id="quote">
					<p className="italic text-gray-600 line-clamp-2">{question.question}</p>
				</div>
			</div>
		</Link>
	);
}

export default QuestionCard;

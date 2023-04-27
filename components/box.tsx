const Box = () => {
	return (
		<div className="grid gap-2 my-8 grid-cols-3 lg:grid-cols-6">
			<div className="h-24 w-24 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
				<p className="text-white p-2">sunset</p>
			</div>
      <div className="h-24 w-24 rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
				<p className="text-white p-2">peach</p>
			</div>
      <div className="h-24 w-24 rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
				<p className="text-white p-2">oceanic</p>
			</div>
      <div className="h-24 w-24 rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
				<p className="text-white p-2">candy</p>
			</div>
		</div>
	);
};

export default Box;

class Counter{
	constructor(){
		this.counter=0;
	}
	increas(){
		this.counter++;
		console.log(this.counter);
	}

	const coolCounter = new Counter();
	coolCounter.increas();
	coolCounter.increas();
}
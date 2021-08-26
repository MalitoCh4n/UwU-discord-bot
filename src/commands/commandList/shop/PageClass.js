

/* Page class */
module.exports = class ShopPage{

    constructor(p){
		this.p = p;
		this.charLen = 30;
		this.id = -1;
    }

    async totalPages(){return 0;}

    async getPage(page,embed){}

	toItem({id,emoji,name,url,price,priceEmoji,lineThrough,offset}){
		let cLength = this.charLen-name.length+(4-(""+price).length);
		if(offset) cLength += offset;
		if(cLength<0) cLength = 0;
		return (lineThrough?"~~":"")+
			"`"+id+"` "+emoji+" **"+
			(url?"[`"+name+"`]("+url+")":'`'+name+'`')+
			"**`"+("-".repeat(cLength))+" "+price+"` "+priceEmoji+"\n"+
			(lineThrough?"~~":"");
	}

}

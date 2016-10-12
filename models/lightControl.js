var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
	nid: { type: String, unique : true, index: true, required: true },
	euid: { type: String, index: true, required: true },
	deviceType: { type: String },
	modelId: { type: String}
	
});

module.exports = new mongoose.Schema({
	serial: { type: String, unique : true, index: true, required: true },
	topicId: { type: String },
	mac: { type: String },
	lightList: { type: [contentSchema] }
});


//module.exports.set('toObject', { virtuals: false });
//module.exports.set('toJSON', { virtuals: false });
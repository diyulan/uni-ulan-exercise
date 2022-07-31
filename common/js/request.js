import Helper from '@/common/js/helper.js'

const host = "http://tcoms-api.tpframe.com";

let requestAll = (url="", param={}, header={}) => {
	return this.requestAll({url, data:param, header});
}

let request = (config={}) => {
	// 默认值避免报错
	let config_default = {
		url: "",
		method: "post",
		data: {api_version: "1.0.0"},
		header: {"content-type": "application/x-www-form-urlencoded"},
		dataType: "json"
	};
	
	// 深度拷贝
	let postData = Helper.deepMerge(config_default, config);
	
	return new Promise((resolve, reject) => {
		uni.request({
			url: host + postData.url,
			data: postData.data,
			header: postData.header,
			dataType: postData.dataType,
			success(res) {
				if(res.statusCode == 200) {
					if(res.data.code == 0) {
						resolve(res.data);
					}else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				}else {
					reject(err);
				}
			},
			fail(err) {
				reject(err);
			}
		})
	})
}

export default {
	request,
	requestAll
}
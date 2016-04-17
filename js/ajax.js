var ajax = {
	post: function (url, callback) {
		$.ajax({
			type: 'POST',
			url: url,
			dataType: 'application/json',
			success: function (content) {
			},
			error: function (xhr) {
				callback(xhr)
			},
			contentType: 'application/json',
			async: true,
			cache: false
		});
	},
	postData: function (url, data) {
		console.log(data);
		$.ajax({
			type: 'POST',
			url: url,
			dataType: 'json',
			data: data,
			success: function () {
				console.log('success');
			},
			error: function (xhr) {
				console.log('error');
			},
			contentType: 'application/json',
			async: true,
			cache: false
		});
	},
	put: function (url, data) {
		$.ajax({
			type: 'PUT',
			url: url,
			dataType: 'json',
			data: data,
			success: function () {
				console.log('success');
			},
			error: function (xhr) {
				alert('error');
			},
			contentType: 'application/json; charset="utf-8',
			async: true,
			cache: false
		});
	},
	delete: function (url, id) {
		$.ajax({
			type: 'DELETE',
			url: url + id,
			dataType: 'json',
			contentType: 'text/plain charset=utf-8',
			async: true,
			cache: false,
			success: function() {
					console.log('success');
			},
			error: function (xhr) {
				alert('error');
			}
		});
	},
	get: function (url, callback) {
		$.ajax({
			url: url,
			dataType: 'json',
			type: 'GET',
			contentType: 'application/json; charset=utf-8',
			async: false,
			cache: false,
			success: function (dataReturned) {
		        callback(dataReturned)
			},
			error: function (xhr) {
				console.log(xhr);
			}
		});
	}
};
"use strict";

define(function () {
	var server = 'http://10.3.108.10:8789/zebra';
	var token = 'cGsuZXlKMUlqb2lhR0Z5Y25rdGVIVmxNVGs1T1NJc0ltRWlPaUpqYVdacloyVXdjblZrYkdRMmN6UnROMncwZUdWeGVtRm1JbjAuN3Z2RGFwMzZoajNuTHI2bS1kT0pPQQ=='
	var layer = 'aHR0cHM6Ly9hLnRpbGVzLm1hcGJveC5jb20vdjQve2lkfS97en0ve3h9L3t5fS5wbmc/YWNjZXNzX3Rva2VuPQ==';
	var attribution = 'PGEgaHJlZj0iaHR0cHM6Ly93d3cubWFwYm94LmNvbS9hYm91dC9tYXBzLyI+wqkgTWFwYm94IMKpIE9wZW5TdHJlZXRNYXA8L2E+';
	var id = 'aGFycnkteHVlMTk5OS5vMzliYm1maA==';
	
	return {
		server: server,
		token: token,
		layer: layer,
		attribution: attribution,
		id: id
	};
});

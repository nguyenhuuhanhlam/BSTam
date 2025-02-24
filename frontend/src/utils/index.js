const splitFullName = (fullName) => {
	if (!fullName || typeof fullName !== 'string') {
		return { first_name: '', last_name: '' }
	}

	// Loại bỏ khoảng trắng thừa và tách thành mảng
	const nameParts = fullName.trim().split(' ')

	// Nếu chỉ có 1 phần (chỉ có first name)
	if (nameParts.length === 1) {
		return { first_name: nameParts[0], last_name: '' }
	}

	// Lấy phần tử cuối làm last name, các phần còn lại làm first name
	const last_name = nameParts.pop()
	const first_name = nameParts.join(' ')

	return { first_name, last_name }
}

export {
	splitFullName
}
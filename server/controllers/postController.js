const catchAsync = require('../utils/catchAsync')

exports.getPosts = catchAsync(async (req, res) => {
    res.send([
        { id: 1, body: 'Hahahah' }
    ])
})
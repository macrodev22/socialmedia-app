const catchAsync = (fn) => {

    return (req, res) => {
        try {
            fn(req, res)
        } catch(err) {
            console.error(err)
            res.status(500).json({
                'detail': 'Error 🤪',
                error: err
            })
        }
    }
}

module.exports = catchAsync
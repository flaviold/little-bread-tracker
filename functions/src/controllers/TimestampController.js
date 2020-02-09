class TimestampController {
  index(req, res) {
    return res.json({
      timestamp: Date.now()
    });
  }
}

module.exports = new TimestampController();
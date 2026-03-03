//expected Schema
// [
//{
// "question_type":"I/E",
// "confidence":3,
// "direction":"I"
// },
// {
// "question_type":"T/F",
// "confidence":0,
// "direction":"F"
// }
// {
// "question_type":"N/S",
// "confidence":6,
// "direction":"S"
// }
// {
// "question_type":"J/P",
// "confidence":3,
// "direction":"P"
// }
//]

// Sigmoid function to weight confidence
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

// Normalized 0-6 scale to 0-1
function normalizeConfidence(confidence) {
    return sigmoid(confidence - 3);
}
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function normalizeConfidence(confidence) {
    return sigmoid(confidence - 3);
}

module.exports = function calculateMBTI(answers) {
    const dichotomies = [
        { pair: "E/I", left: "E", right: "I" },
        { pair: "S/N", left: "S", right: "N" },
        { pair: "T/F", left: "T", right: "F" },
        { pair: "J/P", left: "J", right: "P" }
    ];

    const result = {
        MBTI_Scores: {},
        MBTI_String: "",
        Detailed: {}
    };

    for (let d of dichotomies) {
        const typeAnswers = answers.filter(a => a.question_type === d.pair);

        if (typeAnswers.length === 0) continue;

        let leftScore = 0;
        let rightScore = 0;

        for (let answer of typeAnswers) {
            const weight = normalizeConfidence(answer.confidence);

            if (answer.direction === d.left) {
                leftScore += weight;
            } else if (answer.direction === d.right) {
                rightScore += weight;
            }
        }

        const total = leftScore + rightScore;

        if (total === 0) continue;

        const leftPercent = (leftScore / total) * 100;
        const rightPercent = (rightScore / total) * 100;

        if (leftPercent >= rightPercent) {
            result.MBTI_String += d.left;
            result.MBTI_Scores[d.left] = leftPercent.toFixed(1) + "%";
        } else {
            result.MBTI_String += d.right;
            result.MBTI_Scores[d.right] = rightPercent.toFixed(1) + "%";
        }

        result.Detailed[d.left] = leftPercent.toFixed(1) + "%";
        result.Detailed[d.right] = rightPercent.toFixed(1) + "%";
    }

    return result;
};
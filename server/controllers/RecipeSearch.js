const basicSearch = async (url, req, res) => {
    console.log(url);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok || response.status !== 200) {
            return res.status(response.status).json({ response });
        }
     

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while fetching recipes' });
    }
};
const basicEdamamSearch = async (req, res) => {
    const query = req.query.q;

    const { EDAMAM_APP_ID } = process.env;
    const { EDAMAM_APP_KEY } = process.env;

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`;
    return basicSearch(url, req, res);
};
const basicSpoonSearch = async (req, res) => {
    const query = req.query.q;
    const { SPOONACULAR_API_KEY } = process.env;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${SPOONACULAR_API_KEY}`;
    return basicSearch(url, req, res);
};
const recipeSpoon = async (req, res) => {
    const { id } = req.params;

    const { SPOONACULAR_API_KEY } = process.env;
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${SPOONACULAR_API_KEY}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ response });
        }

        const data = await response.json();

        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while fetching recipe' });
    }
};

module.exports = {
    basicEdamamSearch,
    basicSpoonSearch,
    recipeSpoon,
};

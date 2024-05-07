const DonateModel = require('../models/donate.model');
const VolunteerModel = require('../models/volunteer.model');
const GalleryModel = require('../models/gallery.model');
const BlogModel = require('../models/blog.model');

function initRoutes(app) {
    app.get('/donate', async (req, res) => {
        const donate = await DonateModel.find({});
        res.json(donate);
    })
    app.get('/volunteer', async (req, res) => {
        const volunteer = await VolunteerModel.find({});
        res.json(volunteer);
    })

    app.get('/contact', async (req,res) => {
        const contact = await ContactModel.find({});
        res.json(contact)
    })

    app.post('/gallery-post',(req,res)=>{
        const galleryData = req.body;
        console.log(galleryData)
        GalleryModel.create(galleryData)
        .then(gallery => req.json(gallery))
        .catch(err => res.json(err))
    })
    
    app.post('/blog-post', (req,res)=>{
        const postBlog = req.body;
        console.log(postBlog)
        BlogModel.create(postBlog)
        .then(blog => res.json(blog))
        .catch(err => res.json(err))
    })

}

module.exports = initRoutes;
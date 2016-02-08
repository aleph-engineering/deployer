/**
 * Created by refucktor on 2/7/16.
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema;

var BasicProfileEntity = new Schema({
    className :   { type: String },
    userId :      { type: String },
    firstName :   { type: String },
    headline :    { type: String },
    lastName :    { type: String },
    summary :     { type: String },
    industry :    { type: String }
});

var GitHubRepositoryEntity = new Schema({
    className : { type: String },
    id : { type: String },
    owner : {
        name : { type: String },
        url : { type: String },
        company : { type: String },
        login : { type: String },
        avatarUrl : { type: String },
        gravatar_id : { type: String },
        html_url : { type: String },
        followers_url : { type: String },
        following_url : { type: String },
        gists_url : { type: String },
        starred_url : { type: String },
        subscriptions_url : { type: String },
        organizations_url : { type: String },
        repos_url : { type: String },
        events_url : { type: String },
        received_events_url : { type: String },
        type : { type: String },
        site_admin : { type: Boolean },
        blog : { type: String },
        email : { type: String },
        hireable : { type: Boolean },
        bio : { type: String },
        public_repos : { type: Number },
        public_gists : { type: Number },
        followers : { type: Number },
        following : { type: Number },
        created_at : { type: Date },
        updated_at : { type: Date }
    },
    name : { type: String },
    full_name : { type: String },
    description : { type: String },
    is_private : { type: Boolean },
    fork : { type: Boolean },
    url : { type: String },
    html_url : { type: String },
    clone_url : { type: String },
    forks_url : { type: String },
    keys_url : { type: String },
    collaborators_url : { type: String },
    git_url : { type: String },
    teams_url : { type: String },
    ssh_url : { type: String },
    svn_url : { type: String },
    hooks_url : { type: String },
    issue_events_url : { type: String },
    mirror_url : { type: String },
    events_url : { type: String },
    assignees_url : { type: String },
    branches_url : { type: String },
    tags_url : { type: String },
    blobs_url : { type: String },
    git_tags_url : { type: String },
    git_refs_url : { type: String },
    trees_url : { type: String },
    statuses_url : { type: String },
    languages_url : { type: String },
    stargazers_url : { type: String },
    contributors_url : { type: String },
    subscribers_url : { type: String },
    subscription_url : { type: String },
    commits_url : { type: String },
    comments_url : { type: String },
    issue_comment_url : { type: String },
    contents_url : { type: String },
    compare_url : { type: String },
    merges_url : { type: String },
    archive_url : { type: String },
    downloads_url : { type: String },
    issues_url : { type: String },
    pulls_url : { type: String },
    milestones_url : { type: String },
    notifications_url : { type: String },
    labels_url : { type: String },
    releases_url : { type: String },
    homepage : { type: String },
    language : { type: String },
    forks_count : { type: Number },
    stargazers_count : { type: Number },
    watchers_count : { type: Number },
    forks : { type: Number },
    size : { type: Number },
    default_branch : { type: String },
    open_issues_count : { type: Number },
    open_issues : { type: Number },
    watchers : { type: Number },
    has_issues : { type: Boolean },
    has_wiki : { type: Boolean },
    has_pages : { type: Boolean },
    has_downloads : { type: Boolean },
    pushed_at : { type: Date },
    created_at : { type: Date },
    updated_at : { type: Date }
});

var GitHubUserEntity = new Schema({
    "className" : { type: String },
    "name" : { type: String },
    "url" : { type: String },
    "company" : { type: String },
    "login" : { type: String },
    "avatarUrl" : { type: String },
    "gravatar_id" : { type: String },
    "html_url" : { type: String },
    "followers_url" : { type: String },
    "following_url" : { type: String },
    "gists_url" : { type: String },
    "starred_url" : { type: String },
    "subscriptions_url" : { type: String },
    "organizations_url" : { type: String },
    "repos_url" : { type: String },
    "events_url" : { type: String },
    "received_events_url" : { type: String },
    "type" : { type: String },
    "site_admin" : { type: Boolean },
    "blog" : { type: String },
    "email" : { type: String },
    "hireable" : { type: Boolean },
    "bio" : { type: String },
    "public_repos" : { type: Number },
    "public_gists" : { type: Number },
    "followers" : { type: Number },
    "following" : { type: Number },
    "created_at" : { type: Date },
    "updated_at" : { type: Date }
});

var HiredEntity = new Schema({
    className : { type: String },
    hiredUserName : { type: String },
    recruiterUserName : { type: String },
    recruitingDate : { type: Date },
    qualification : { type: Number },
    version: {type: Number}
});

var UserEntity = new Schema({
    className : { type: String },
    username : { type: String },
    fullName : { type: String },
    email : { type: String },
    title : { type: String },
    registerDate : { type: Date },
    stargazers : { type: Number },
    avatar : { type: String }
});

var UserProviderEntity = new Schema({
    className : { type: String },
    username : { type: String },
    provider : { type: String },
    loginName : { type: String },
    email : { type: String }
});

module.exports = {
    BasicProfileEntity : mongoose.model('BasicProfileEntity', BasicProfileEntity),
    GitHubRepositoryEntity : mongoose.model('GitHubRepositoryEntity', GitHubRepositoryEntity),
    GitHubUserEntity : mongoose.model('GitHubUserEntity', GitHubUserEntity),
    HiredEntity : mongoose.model('HiredEntity', HiredEntity),
    UserEntity : mongoose.model('UserEntity', UserEntity),
    UserProviderEntity : mongoose.model('UserProviderEntity', UserProviderEntity)
};

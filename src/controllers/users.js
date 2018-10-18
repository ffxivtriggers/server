async function hello (ctx) {
  let user = ctx.request.query.user;
  await ctx.ok({ user });
}

module.exports = {
  hello
};  
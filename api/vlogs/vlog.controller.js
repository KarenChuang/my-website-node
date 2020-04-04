const vlogModel = require('../vlogs/vlog.model')

const getAll = async ctx => {
  const limit = parseInt(ctx.query.limit) || 10;
  const page = parseInt(ctx.query.page) || 1;
  const skip = limit * (page - 1);
  
  try {
    const vlogs = await vlogModel.find().limit(limit).skip(skip)
    ctx.status = 200;
    ctx.body = {
      data: {
        list: vlogs,
        total: await vlogModel.count({})
      },
      code: ctx.status,
      msg: 'success'
    }
  } catch (error) {
    ctx.status = ctx.status || 500;
    ctx.body = error.message;
  }
};

const create = async ctx => {
  try {
    const data = ctx.request.body

    data.create_at = new Date().getTime()

    let vlog = new vlogModel(data)
    await vlog.save()

    ctx.body = {
      success: 'ok',
      message: 'done'
    }
  } catch (error) {
    ctx.status = ctx.status || 500;
    ctx.body = error.message;
  }
}

const remove = async ctx => {
  const { id } = ctx.params
  try {
    let vlog = await vlogModel.findOne({ _id: ctx.params.id });
    if(vlog) {
      await vlog.remove()
      ctx.body = {
        success: true,
        message: `${id} deleted`
      }
    }
  } catch (error) {
    ctx.status = ctx.status || 500;
    ctx.body = error.message;
  }
}

const update = async ctx => {
  try {
    const data = ctx.request.body
    console.log(ctx.request.body);
    
    data.update_at = new Date().getTime()
    await vlogModel.findByIdAndUpdate(data.id, data);
    ctx.body = {
      success: true,
      message: `${data.id} updated`
    }
  } catch (error) {
    ctx.status = ctx.status || 500;
    ctx.body = error.message;
  }


}

module.exports = {
  getAll,
  create,
  remove,
  update
}
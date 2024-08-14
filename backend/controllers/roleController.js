const Role = require('../models/Role');

const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: '获取角色列表失败' });
  }
};

const getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: '未找到该角色' });
    }
    res.json(role);
  } catch (error) {
    res.status(500).json({ message: '获取角色详情失败' });
  }
};

const createRole = async (req, res) => {
    try {
      const { name, permissions } = req.body;
  
      // 检查角色名是否已存在
      const existingRole = await Role.findOne({ name });
      if (existingRole) {
        return res.status(400).json({ message: '该角色名已存在' });
      }
  
      // 创建新角色
      const newRole = new Role({
        name,
        permissions
      });
  
      // 保存到数据库
      const savedRole = await newRole.save();
  
      res.status(201).json({
        message: '角色创建成功',
        role: savedRole
      });
    } catch (error) {
      console.error('创建角色时出错:', error);
      res.status(500).json({ message: '创建角色失败', error: error.message });
  }
};

module.exports = {
  getRoles,
  getRoleById,
  createRole
};
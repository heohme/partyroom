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
    const newRole = new Role(req.body);
    const savedRole = await newRole.save();
    res.status(201).json(savedRole);
  } catch (error) {
    res.status(400).json({ message: '创建角色失败' });
  }
};

module.exports = {
  getRoles,
  getRoleById,
  createRole
};
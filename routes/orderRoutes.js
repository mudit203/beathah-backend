import express from 'express';
import {
  getAllOrders,
  getOrderById,
  getOrderCustomer,
  updateOrder,
  deleteOrder,
  getDashboardOrders,
  getDashboardRecentOrder,
  getBestSellerProductChart,
  getDashboardCount,
  getDashboardAmount,
} from '../controller/orderController.js';

const router = express.Router();

// === Specific Dashboard Routes First ===
router.get('/dashboard/orders', getDashboardOrders);
router.get('/dashboard/recent-orders', getDashboardRecentOrder);
router.get('/best-seller/chart', getBestSellerProductChart);
router.get('/dashboard-count', getDashboardCount);
router.get('/dashboard-amount', getDashboardAmount);

// === Other Specific Routes Next ===
router.get('/customer/:id', getOrderCustomer);

// === General CRUD Routes Last ===
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;

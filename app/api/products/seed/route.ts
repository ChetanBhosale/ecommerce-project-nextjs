import { NextRequest, NextResponse } from 'next/server';

import data from '@/lib/data';
import dbConnect from '@/lib/dbConnect';
import ProductModel from '@/lib/models/ProductModel';
import UserModel from '@/lib/models/UserModel';

export const GET = async (request: NextRequest) => {
  try {
    const { users, products } = data;
    
    await dbConnect();

    // Clear existing data
    await UserModel.deleteMany();
    await ProductModel.deleteMany();

    // Insert users
    const createdUsers = await UserModel.insertMany(users);
    console.log(`✅ Created ${createdUsers.length} users`);

    // Insert products
    const createdProducts = await ProductModel.insertMany(products);
    console.log(`✅ Created ${createdProducts.length} products`);

    return NextResponse.json({
      message: 'Database seeded successfully',
      users: createdUsers.length,
      products: createdProducts.length,
    });
  } catch (error: any) {
    console.error('❌ Seeding error:', error);
    return NextResponse.json(
      {
        message: 'Error seeding database',
        error: error.message,
      },
      { status: 500 }
    );
  }
};

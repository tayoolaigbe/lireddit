import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './entities/User';

export default {
	migrations: {
		path: path.join(__dirname, './migrations'), // path to the folder with migrations
		pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
		// transactional: true, // wrap each migration in a transaction
		// disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
		// allOrNothing: true, // wrap all migrations in master transaction
		// dropTables: true, // allow to disable table dropping
		// safe: false, // allow to disable table and column dropping
		// emit: 'ts',
	},
	entities: [Post, User],
	dbName: 'lireddit',
	password: 'tayo',
	type: 'postgresql',
	debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];

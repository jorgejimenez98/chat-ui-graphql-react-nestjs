import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql'
import { User } from 'src/users/entities/user.entity'

const getCurrentUserByContext = (context: ExecutionContext): User => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest<{ user: User }>().user 
  } else if (context.getType<GqlContextType>() === 'graphql') {
    return GqlExecutionContext.create(context).getContext().req.user
  }
}

export const CurrentUser = createParamDecorator(
  (_: unknown, context: ExecutionContext) => {
    return getCurrentUserByContext(context) 
  }
)